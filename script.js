$(document).on("pagecreate", function () {

    // ==========================================
    // 1. PENGESAHAN BORANG BOOKING (BOOKING FORM)
    // ==========================================
    $("#bookingForm").on("submit", function (e) {
        e.preventDefault(); // Menghentikan penghantaran lalai borang

        var isValid = true;

        // Ambil nilai dari input
        var name = $("#bookName").val().trim();
        var email = $("#bookEmail").val().trim();
        var phone = $("#bookPhone").val().trim();
        var packageVal = $("#bookPackage").val();
        var date = $("#bookDate").val();
        var pax = $("#bookPax").val();
        var consent = $("#bookConsent").is(":checked");

        // Format email ringkas
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // Semak Nama
        if (name === "") {
            $("#bookNameErr").show();
            isValid = false;
        } else {
            $("#bookNameErr").hide();
        }

        // Semak Email
        if (email === "" || !email.match(emailPattern)) {
            $("#bookEmailErr").show();
            isValid = false;
        } else {
            $("#bookEmailErr").hide();
        }

        // Semak Nombor Telefon
        if (phone === "") {
            $("#bookPhoneErr").show();
            isValid = false;
        } else {
            $("#bookPhoneErr").hide();
        }

        // Semak Pakej
        if (packageVal === "") {
            $("#bookPackageErr").show();
            isValid = false;
        } else {
            $("#bookPackageErr").hide();
        }

        // Semak Tarikh
        if (date === "") {
            $("#bookDateErr").show();
            isValid = false;
        } else {
            $("#bookDateErr").hide();
        }

        // Semak Bilangan Peserta (Pax)
        if (pax === "" || pax < 1) {
            $("#bookPaxErr").show();
            isValid = false;
        } else {
            $("#bookPaxErr").hide();
        }

        // Semak Ethical Consent Checkbox
        if (!consent) {
            $("#bookConsentErr").show();
            isValid = false;
        } else {
            $("#bookConsentErr").hide();
        }

        // Jika semua maklumat sah
        if (isValid) {
            $("#bookSuccess").fadeIn();
            setTimeout(function () {
                $("#bookingForm")[0].reset();
                $("#bookSuccess").fadeOut();
            }, 3000);
        }
    });

    // ==========================================
    // 2. PENGESAHAN BORANG CONTACT US (CONTACT FORM)
    // ==========================================
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        var isValid = true;

        var name = $("#contactName").val().trim();
        var email = $("#contactEmail").val().trim();
        var message = $("#contactMessage").val().trim();
        var consent = $("#contactConsent").is(":checked");

        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // Semak Nama
        if (name === "") {
            $("#contactNameErr").show();
            isValid = false;
        } else {
            $("#contactNameErr").hide();
        }

        // Semak Email
        if (email === "" || !email.match(emailPattern)) {
            $("#contactEmailErr").show();
            isValid = false;
        } else {
            $("#contactEmailErr").hide();
        }

        // Semak Mesej
        if (message === "") {
            $("#contactMessageErr").show();
            isValid = false;
        } else {
            $("#contactMessageErr").hide();
        }

        // Semak Ethical Consent Checkbox
        if (!consent) {
            $("#contactConsentErr").show();
            isValid = false;
        } else {
            $("#contactConsentErr").hide();
        }

        // Jika semua maklumat sah
        if (isValid) {
            $("#contactSuccess").fadeIn();
            setTimeout(function () {
                $("#contactForm")[0].reset();
                $("#contactSuccess").fadeOut();
            }, 3000);
        }
    });

});