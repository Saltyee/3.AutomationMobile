const { use } = require('chai')
const { text, execute, isEnabled, isSelected, isDisplayed, enabled, displayed } = require('wd/lib/commands')
const { selected } = require('wd/lib/element-commands')
const { isWebDriverException } = require('wd/lib/utils')
const dialog = require('../../pageObject/dialog_page')
const data = require('../../data/data_title')
const expect = require('chai').expect

describe('Automation Mobile Android', () => {
    it('Opening the Text Entry Dialogs', async() => {
        await dialog.appBtn.click()
        await dialog.alertDialogs.click()
        await dialog.textEntryDialogs.click()
    
    })
    it('Input username & password', async() => {
        await dialog.usernameFieldBtn.addValue("Test User")
        await dialog.usernameFieldBtn.clearValue()
        await dialog.usernameFieldBtn.addValue('Actual User')
        await dialog.passwordFieldBtn.addValue("Test Pass")
       
        
    })
    it('Verify input username & password', async() => {
        let text = await dialog.usernameFieldBtn.getText()
        console.log(text)
        expect(text).to.equal('Actual User')

        await dialog.okBtn.click()
        await driver.back();
        await driver.back();

    })
    it('Touch scroll & back', async() => {
        await driver.touchAction([
            {action: 'press', x : 500, y : 1000},
            {action: 'moveTo', x : 500, y:100},
            'release'
        ])
        await driver.back();
    })
    it('The Orientation Android Emulator', async() => {
        console.log(await driver.getOrientation())
        await driver.setOrientation('LANDSCAPE')
        await driver.setOrientation('PORTRAIT')


        await driver.pause(1000)
        await driver.saveScreenshot('./screenshots/landscape.png')
    })
    it('Verify the repeat alarm options has attribute checked set to true when selected', async() => {
        let Days, isChecked

        await dialog.appBtn.click()
        await dialog.alertDialogs.click()
        await dialog.repeatAlarm.click()

        Days = await dialog.weekdayCheckbox(0).getText()
        expect(Days).equal('Every Monday')

        isChecked = await dialog.weekdayCheckbox(0).getAttribute('checked')
        expect(isChecked).equal('false')

        await dialog.weekdayCheckbox(0).getAttribute('clickable')
        await dialog.weekdayCheckbox(0).click()

        isChecked = await dialog.weekdayCheckbox(0).getAttribute('checked')
        expect(isChecked).equal('true')
        await dialog.okBtn.click()
        await driver.back()
        await driver.pause(2000)
        await driver.back()
        await driver.back()
    })
    it('Verify Content Id Button', async() => {
        await driver.pause(2000)
        await dialog.viewsBtn.click()
        await driver.touchAction([
            {action: 'press', x : 500, y : 1400},
            {action: 'moveTo', x : 500, y: 300},
            'release',
            {action: 'press', x : 500, y : 1400},
            {action: 'moveTo', x : 500, y: 300},
            'release',
            {action: 'press', x : 500, y : 1400},
            {action: 'moveTo', x : 500, y: 300},
            'release'
        ])
        await dialog.tabsBtn.click()
        await dialog.contentIdBtn.click()

        for(i=0; i<=2; i++){
            Enabled = await dialog.Tabs[i].isEnabled()
            Selected = await dialog.Tabs[i].isSelected()
            Displayed = await dialog.Tabs[i].isDisplayed()

            console.log(`Tabs ${i}`)
            console.log('isEnabled = ', Enabled)
            console.log('isSelected = ', Selected)
            console.log('isDisplayed = ', Displayed)

            if(isEnabled && isSelected){
                console.log("Tab 1 details = ", await dialog.tabsDetails(0).isDisplayed())
                console.log("Tab 2 details = ", await dialog.tabsDetails(1).isDisplayed())
                console.log("Tab 3 details = ", await dialog.tabsDetails(2).isDisplayed())
            }
        }
    })
})