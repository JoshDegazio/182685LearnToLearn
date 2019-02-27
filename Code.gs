/**
 * @OnlyCurrentDoc Limits the script to only accessing the current sheet.
 */

/**
 * A special function that runs when the spreadsheet is open, used to add a
 * custom menu to the spreadsheet.
 */
function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Add...', functionName: 'addition_'}
  ];
  spreadsheet.addMenu('Opertions', menuItems);
}

function addition_()
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = sheet.getRange(1, 1, 1, 2);
  var rowValues = row.getValues();
  var value1 = rowValues[0][0];
  var value2 = rowValues[0][1];
  var value3 = value1 + value2;
  
  
  if (value3 != null) 
  {
      Browser.msgBox('Added', value1,' and ', value2,'. The result: ', value3,
        Browser.Buttons.OK);
    return;
  }

  
}
