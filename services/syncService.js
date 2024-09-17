const axios = require("axios");

async function fetchGitHubUsers() {
  try {
    const githubApiUrl = process.env.GITHUB_API_URL;

    const response = await axios.get(githubApiUrl);
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching users from GitHub.");
  }
}

function syncUserDatabase(localUsers, githubUsers, userRepository) {
  const githubUsernames = githubUsers.map((user) => user.login);

  // Add or update users from GitHub
  githubUsers.forEach((githubUser) => {
    const existingUser = userRepository.findByUserName(githubUser.login);
    if (existingUser) {
      userRepository.updateUser({
        userName: githubUser.login,
        picture: githubUser.avatar_url,
      });
    } else {
      userRepository.addUser({
        userName: githubUser.login,
        picture: githubUser.avatar_url,
        externalSource: "github",
      });
    }
  });

  // Remove users that no longer exist in GitHub's result
  localUsers.forEach((localUser) => {
    if (!githubUsernames.includes(localUser.userName)) {
      userRepository.deleteUserByUserName(localUser.userName);
    }
  });
}

module.exports = {
  fetchGitHubUsers,
  syncUserDatabase,
};
