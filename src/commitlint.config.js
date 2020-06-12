/**
 * In short, the following rules should be sticked to during the writing
 * Git commit messages:
 *
 * 1. Separate subject from body with a blank line
 * 2. Limit the subject line to 50 characters
 * 3. Capitalize the subject line
 * 4. Do not end the subject line with a period
 * 5. Use the imperative mood in the subject line
 * 6. Wrap the body at 72 characters
 * 7. Use the body to explain what and why vs. how
 *
 * Commit messages format:
 * type(scope): Subject
 *
 * Body.
 *
 * Footer.
 *
 * scope - service or component working on
 *
 * Please check https://chris.beams.io/posts/git-commit for more detailed
 * guide on a formatting Git commit messages topics.
 */
module.exports = {
  rules: {
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [2, "always", 50],
    "footer-leading-blank": [2, "always"],
    "footer-max-line-length": [2, "always", 50],
    "header-max-length": [2, "always", 72],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
  },
  extends: ["@commitlint/config-conventional"],
};
