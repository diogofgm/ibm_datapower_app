/* TODO: jink to replace theme_utils with that from core */
require.config({
    paths: {
      theme_utils: '../app/ibm_datapower_app/theme_utils'
    }
  });
  require([
      'underscore',
      'jquery',
      'splunkjs/mvc',
      'splunkjs/mvc/tableview',
      'theme_utils',
      'splunkjs/mvc/simplexml/ready!'
  ], function(_, $, mvc, TableView, themeUtils) {
      // Translations from rangemap results to CSS class
      var ICONS = {
          warn: 'alert-circle',
          error: 'x-circle',
          info: 'check-circle'
      };
      var RangeMapIconRenderer = TableView.BaseCellRenderer.extend({
          canRender: function(cell) {
              // Only use the cell renderer for the range field
              return cell.field === 'log_level';
          },
          render: function($td, cell) {
              var icon = 'question';
              var isDarkTheme = themeUtils.getCurrentTheme && themeUtils.getCurrentTheme() === 'dark';
              // Fetch the icon for the value
              if (ICONS.hasOwnProperty(cell.value)) {
                  icon = ICONS[cell.value];
              }
              // Create the icon element and add it to the table cell
              $td.addClass('icon').html(_.template('<i class="icon-<%-icon%> <%- range %> <%- isDarkTheme %>" title="<%- range %>"></i>', {
                  icon: icon,
                  range: cell.value,
                  isDarkTheme: isDarkTheme ? 'dark' : ''
              }));
          }
      });
      mvc.Components.get('event_list').getVisualization(function(tableView){
          // Register custom cell renderer, the table will re-render automatically
          tableView.addCellRenderer(new RangeMapIconRenderer());
      });
  });