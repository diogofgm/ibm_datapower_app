define([], function () {
    return {
      getCurrentTheme() {
          return window.__splunk_page_theme__ || 'light';
      }
    };
});