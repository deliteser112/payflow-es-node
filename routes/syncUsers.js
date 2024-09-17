const {
  fetchGitHubUsers,
  syncUserDatabase,
} = require("../services/syncService");

const syncUsers = (userRepository) => {
  return async (req, res) => {
    try {
      console.log("Starting sync with GitHub...");

      // Fetch GitHub users using service
      const githubUsers = await fetchGitHubUsers();

      if (!githubUsers || githubUsers.length === 0) {
        console.log("No users found on GitHub.");
        return res.status(404).json({ message: "No users found from GitHub." });
      }

      const localUsers = userRepository.findAllUsers();
      syncUserDatabase(localUsers, githubUsers, userRepository);

      console.log(`Synced ${githubUsers.length} users successfully.`);
      res
        .status(200)
        .json({
          message: "Users synced successfully",
          syncedUsersCount: githubUsers.length,
        });
    } catch (error) {
      console.error("Error during sync:", error);
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = syncUsers;
