module.exports = {
  // Use Conventional Commit Rules for Angular
  extends: ['@commitlint/config-conventional'],

  // Custom Commit Rules
  rules: {
    // Disabled subject case rule (won't check case)
    'subject-case': [0, 'always'],

    // Maximum length for commit message body is 300 characters
    'body-max-line-length': [2, 'always', 300],

    // Allowed maximum length for commit header (up to 200)
    'header-max-length': [0, 'always', 200],
  },
};

/*
   ✅ Angular-Specific Commit Types:
   
   1. build - Changes related to the build system or dependencies  
      Example: build: upgrade Angular to v16
   
   2. chore - Maintenance or minor changes (that don't affect the code)  
      Example: chore: update Angular dependencies
   
   3. ci - Continuous Integration configuration changes  
      Example: ci: update GitHub Actions
   
   4. docs - Documentation changes  
      Example: docs: add setup guide for Angular project
   
   5. feat - Adding a new feature  
      Example: feat: implement lazy loading for modules
   
   6. fix - Bug fixes  
      Example: fix: resolve form validation issue
   
   7. perf - Performance improvements  
      Example: perf: optimize Angular change detection
   
   8. refactor - Improving code structure without changing behavior  
      Example: refactor: move services to core module
   
   9. revert - Reverting a previous commit  
      Example: revert: revert "feat: implement lazy loading"
   
   10. style - Only formatting changes (without affecting the code meaning)  
       Example: style: format code using Prettier
   
   11. test - Adding/updating unit or integration tests  
       Example: test: add unit tests for auth service

   11. security - For security 
       Example: test: add security for the app
 */
