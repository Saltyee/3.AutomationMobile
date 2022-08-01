class Dialog{
    get appBtn(){return $('~App')}
    get alertDialogs(){return $('~Alert Dialogs')}
    get repeatAlarm(){return $('~Repeat alarm')}
    get mondaysBtn(){return $('//android.widget.CheckedTextView[@index="5"]')}
    get allDays(){return $$('//android.widget.CheckedTextView')} 
    get textEntryDialogs(){return $('~Text Entry dialog')}
    
    get usernameFieldBtn(){return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]')}
    get passwordFieldBtn(){return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]')}
    
    get okBtn(){return $('//android.widget.Button[@text="OK"]')}
    get cancelBtn(){return $('//android.widget.Button[@text="CANCEL"')}

    weekdayCheckbox(index)
    {
        return $(`//android.widget.CheckedTextView[@index="${index}"]`)
    }

    get viewsBtn(){return $('~Views')}
    get tabsBtn(){return $('//android.widget.TextView[@content-desc="Tabs"]')}
    get contentIdBtn(){return $('//android.widget.TextView[@content-desc="1. Content By Id"]')}

    get Tabs(){ return $$(`android.widget.LinearLayout`)}
    tabsDetails(index)
    {
        return $(`//android.widget.LinearLayout[@index="${index}"]`)
    }


    get cancelShortDialogBtn() {return $('//android.widget.Button[@content-desc="OK Cancel dialog with a message"]')}
    get dialogModalTitle() {return $('//android.widget.TextView[@index="1"]')}
    getDialogModalTitle(){
        let title = this.dialogModalTitle.getText()
        return title
    }
    getDialogModalMsg(){
        let msg =  this.dialogModalMsg.getText()
        return msg
    }
}
module.exports = new Dialog