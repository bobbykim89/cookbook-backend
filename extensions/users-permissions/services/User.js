"use strict";

module.exports = {
  /**
   * Promise to fetch authenticated user.
   * @return {Promise}
   */
  fetchAuthenticatedUser(id) {
    return strapi
      .query("user", "users-permissions")
      .findOne({ id }, ["role", "profile", "recipes"]); // ← ADD OTHER FIELDS HERE!
  },
};
