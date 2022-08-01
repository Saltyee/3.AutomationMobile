const { requestWithRetry } = require("wd/lib/http-utils")

class Object{
    get lanjutBtn(){return $('//android.widget.TextView[@index="0"]')}
    
    get lewatiBtn(){return $('//android.widget.TextView[@text="LEWATI"]')}
   
    get provinsiBtn(){ return $('//android.widget.CheckedTextView[@text="- Pilih Provinsi -"]')}
    get kabupatenBtn(){ return $('//android.widget.CheckedTextView[@text="- Pilih Kota/Kabupaten -"]')}
    get jakartaSelatanBtn(){ return $('//android.widget.CheckedTextView[@text="Jakarta Selatan"]')}
    get dkiJakartaBtn(){ return $('//android.widget.CheckedTextView[@text="DKI Jakarta"]')}
    get nextBtn(){ return $('//android.widget.TextView[@text="LANJUT"]')}

    get karierBtn() { return $('//android.widget.TextView[@text="Karier"]')}
    get komunitasBtn() { return $('//android.widget.TextView[@text="Komunitas"]')}
    get BelajarBtn() { return $('//android.widget.TextView[@text="Belajar"]')}
    get AkunBtn() { return $('//android.widget.TextView[@text="Akun"]')}

    get searchLoker() { return $('//android.widget.EditText[@text="Cari Lowongan Kerja"]')}
    get d3Loker() { return $('//android.widget.Button[@text="D3"]')}
    get s1Loker() { return $('//android.widget.CompoundButton[@text="S1"]')}
    get inputLoker() { return $('//android.widget.EditText[@resource-id="com.kitalulus:id/toolbar_search_text"]')}

    get lamarBtn() { return $('//android.widget.Button[@text="Lamar"]')}
    get verifyLoginBtn() { return $('//android.widget.LinearLayout[@index="3"]')}
    get loginEmail() {return $('//android.widget.LinearLayout[@index="0"]')}

    get mulaiUjianBtn() { return $('//android.widget.Button[@resource-id="com.kitalulus:id/dialog_job_screening_button_apply"]')}
    get accountBtn() { return $('//android.widget.FrameLayout[@resource-id="com.kitalulus:id/account_nav"]')}
    get verifyAccount() { return $('//android.widget.TextView[@text="Hai, Workspace Iqbalee"]')}

    get semuaBtn() {return $('//android.widget.TextView[@text="Semua"]')}
    get bookmarkBtn() {return $('//android.widget.ImageView[@resource-id="com.kitalulus:id/iv_job_detail_bookmarked"]')}

    get checkBookmarkBtn() {return $('//android.widget.LinearLayout[@resource-id="com.kitalulus:id/fragment_home_screen_application_dashboard_bookmark_wrapper"]')}
    get verifyBookmark() {return $('//android.widget.TextView[@resource-id="com.kitalulus:id/item_vacancy_position"]')}
}
module.exports = new Object