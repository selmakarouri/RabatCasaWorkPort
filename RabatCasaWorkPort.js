
var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";







//تحقق من الصفحة ونفذ الإجراء المناسب

if (window.location.href.startsWith(vtvUrlPrefix)) {
  const btnVerify = document.querySelector("#btnVerify");
  if (btnVerify) {
    btnVerify.click();
  }

//----------------VT--------------------//


    } else if (window.location.href.startsWith(thirdUrlPrefix)) {
  // دالة لإضافة الأزرار إلى الصفحة

  // إنشاء الأزرار
  const RabatWNormalButton = createButton("Rabat Work Normal", function() {
(function () {
    "use strict";

  (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(1); //1 corresponds to 'Rabat'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(2); // 2 corresponds to 'Long Stay Visa'
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                    VisaSubType.select(1); // 1 corresponds to 'Work'
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(1); // 1 corresponds to 'Normal'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

    setTimeout(function () {
        var f = setInterval(function () {
            if (
                typeof OnVerifyCaptcha !== "undefined" &&
                typeof b !== "undefined" &&
                typeof d !== "undefined"
            ) {
                window.OnVerifyCaptcha = OnVerifyCaptcha;
                $("#dpModal").modal("hide");
                window.onDpAccept = OnVerifyCaptcha;
                window.onDpReject = onAjaxSuccess;
                clearInterval(f);
            }
        }, 100);

        var a = setInterval(function () {
            if ($("#btnSubmit").is(":visible")) {
                $("#btnSubmit").click();
                clearInterval(a);
            }
        }, 100);
    }, 120);

})();


    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Rabat Work Normal بنجاح!");
  });
const RabatWPremiumButton = createButton("Rabat Work Premium", function() {
(function () {
    "use strict";

    (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(1); // 1 corresponds to 'Rabat'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(2); // 2 corresponds to 'Long Stay Visa'
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                    VisaSubType.select(1); // 1 corresponds to 'Work'
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(2); // 2 corresponds to 'Premium'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

    setTimeout(function () {
        var f = setInterval(function () {
            if (
                typeof OnVerifyCaptcha !== "undefined" &&
                typeof b !== "undefined" &&
                typeof d !== "undefined"
            ) {
                window.OnVerifyCaptcha = OnVerifyCaptcha;
                $("#dpModal").modal("hide");
                window.onDpAccept = OnVerifyCaptcha;
                window.onDpReject = onAjaxSuccess;
                clearInterval(f);
            }
        }, 100);

        var a = setInterval(function () {
            if ($("#btnSubmit").is(":visible")) {
                $("#btnSubmit").click();
                clearInterval(a);
            }
        }, 100);
    }, 120);

})();

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Rabat Tourism Premium بنجاح!");
  });
    
  const CasaWNormalButton = createButton("Casa Work Normal", function() {
(function () {
    "use strict";

    var isOkButtonClicked = false;

 (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(2); // 2 corresponds to 'Casablanca'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(2); // 2 corresponds to 'Long Stay Visa'
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                    VisaSubType.select(1); // 1 corresponds to 'Work'
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(1); // 1 corresponds to 'Normal'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

    setTimeout(function () {
        var f = setInterval(function () {
            if (
                typeof OnVerifyCaptcha !== "undefined" &&
                typeof b !== "undefined" &&
                typeof d !== "undefined"
            ) {
                window.OnVerifyCaptcha = OnVerifyCaptcha;
                $("#dpModal").modal("hide");
                window.onDpAccept = OnVerifyCaptcha;
                window.onDpReject = onAjaxSuccess;
                clearInterval(f);
            }
        }, 100);

        var a = setInterval(function () {
            if ($("#btnSubmit").is(":visible")) {
                $("#btnSubmit").click();
                clearInterval(a);
            }
        }, 100);
    }, 120);

})();

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Casa Work Normal بنجاح!");
  });
  const CasaWPremiumButton = createButton("Casa Work Premium", function() {
(function () {
    "use strict";

   (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(2); // 2 corresponds to 'Casablanca'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(2); // 2 corresponds to 'Long Stay Visa'
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                    VisaSubType.select(1); // 1 corresponds to 'Work'
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(2); // 2 corresponds to 'Premium'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

    setTimeout(function () {
        var f = setInterval(function () {
            if (
                typeof OnVerifyCaptcha !== "undefined" &&
                typeof b !== "undefined" &&
                typeof d !== "undefined"
            ) {
                window.OnVerifyCaptcha = OnVerifyCaptcha;
                $("#dpModal").modal("hide");
                window.onDpAccept = OnVerifyCaptcha;
                window.onDpReject = onAjaxSuccess;
                clearInterval(f);
            }
        }, 100);

        var a = setInterval(function () {
            if ($("#btnSubmit").is(":visible")) {
                $("#btnSubmit").click();
                clearInterval(a);
            }
        }, 100);
    }, 120);

})();

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Casa Work Premium بنجاح!");
  });

  const RabatBNormalButton = createButton("Rabat Business Normal", function() {
(function () {
    "use strict";

    (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(1); //1 corresponds to 'Rabat'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(1); // 1 corresponds to 'Short Stay Visa'
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                    VisaSubType.select(1); // 1 corresponds to 'Business'
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(1); // 1 corresponds to 'Normal'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

    setTimeout(function () {
        var f = setInterval(function () {
            if (
                typeof OnVerifyCaptcha !== "undefined" &&
                typeof b !== "undefined" &&
                typeof d !== "undefined"
            ) {
                window.OnVerifyCaptcha = OnVerifyCaptcha;
                $("#dpModal").modal("hide");
                window.onDpAccept = OnVerifyCaptcha;
                window.onDpReject = onAjaxSuccess;
                clearInterval(f);
            }
        }, 100);

        var a = setInterval(function () {
            if ($("#btnSubmit").is(":visible")) {
                $("#btnSubmit").click();
                clearInterval(a);
            }
        }, 100);
    }, 120);

})();

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Rabat Business Normal بنجاح!");
  });

  const RabatBPremiumButton = createButton("Rabat Business Premium", function() {
(function () {
    "use strict";

  
    (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(1); //1 corresponds to 'Rabat'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(1); // 1 corresponds to 'Short Stay Visa'
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                    VisaSubType.select(1); // 1 corresponds to 'Business'
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(2); // 2 corresponds to 'Premium'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

    setTimeout(function () {
        var f = setInterval(function () {
            if (
                typeof OnVerifyCaptcha !== "undefined" &&
                typeof b !== "undefined" &&
                typeof d !== "undefined"
            ) {
                window.OnVerifyCaptcha = OnVerifyCaptcha;
                $("#dpModal").modal("hide");
                window.onDpAccept = OnVerifyCaptcha;
                window.onDpReject = onAjaxSuccess;
                clearInterval(f);
            }
        }, 100);

        var a = setInterval(function () {
            if ($("#btnSubmit").is(":visible")) {
                $("#btnSubmit").click();
                clearInterval(a);
            }
        }, 100);
    }, 120);
// Wait for the modal to be fully shown
$(document).ready(function() {
    // Function to handle the modal shown event
    $('#commonModal').on('shown.bs.modal', function () {
        // Find the Ok button and trigger a click event
        $('#commonModal .btn-primary').click();
    });
});
})();

    //-------------------//

})();
      console.log("تم تنفيذ الشيفرة لزر Casa 3 Premium بنجاح!");
  });

  //-----------------------------------------------------------/

  // إضافة الأزرار إلى العنصر الذي يحتوي على الأزرار
var targetDiv = document.querySelector('.bg-mode.shadow.rounded-3.overflow-hidden.p-3.col-md-4');
var targetSibling = targetDiv.querySelector('h5.pt-3.text-center');

if (targetSibling) {
    // إنشاء العنصر الذي يحتوي على الأزرار
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'bg-mode';

    // إضافة الأزرار إلى العنصر الذي يحتوي على الأزرار
 const row1 = document.createElement('div');
  row1.style.display = 'flex';
  row1.appendChild(RabatWNormalButton);
  row1.appendChild(CasaWNormalButton);
  row1.appendChild(RabatBNormalButton);
    
  const row2 = document.createElement('div');
  row2.style.display = 'flex';
  row2.appendChild(RabatWPremiumButton);
  row2.appendChild(CasaWPremiumButton);
  row2.appendChild(RabatBPremiumButton); 

  // إضافة الصفوف إلى العنصر الذي يحتوي على الأزرار
  buttonsContainer.appendChild(row1);
  buttonsContainer.appendChild(row2);
    
    // تحديد الشكل المطلوب للأزرار
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.flexDirection = 'column';

    // إدراج العنصر الذي يحتوي على الأزرار بعد العنصر المستهدف
    targetSibling.parentNode.insertBefore(buttonsContainer, targetSibling.nextSibling);
  } else {
    console.error("لم يتم العثور على العنصر المستهدف");
  }
}

// دالة لإنشاء الأزرار
function createButton(label, clickHandler) {
  var button = document.createElement("button");
  button.textContent = label;
  button.style.width = "45%";
  button.style.margin = "8px";
  button.style.cursor = 'pointer';
  button.style.border = '2.5px solid #f09b0a'; // Border color
  button.style.fontSize = '12px';
  button.style.padding = '8px';
  button.style.backgroundColor = '#3498db';
  button.style.color = '#ffffff';
  button.style.borderRadius = '15px';
  button.style.textAlign = 'center';
  button.style.textDecoration = 'none';
  button.style.display = 'inline-block';
  button.style.transition = 'background-color 0.5s';

  // Mouseover effect
  button.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#5fd49d";
    this.style.border = '2.5px solid #2980b9';
  });

  // Mouseout effect
  button.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#3498db";
    this.style.border = '2.5px solid #f09b0a';
  });

  // إضافة مسؤول الحدث على الزر
  button.addEventListener("click", clickHandler);

  return button;
}


//----------------------- click btnSubmit ------------------------------------------------------

(function () {
  "use strict";
  var OnVerifyCaptcha;
  var onAjaxSuccess;

  // تحقق من عنوان URL الحالي وتنفيذ الشيفرة فقط إذا كانت الصفحة المطلوبة
  if (
    window.location.href.startsWith("https://morocco.blsportugal.com/MAR/account/login") ||
    window.location.href.startsWith("https://morocco.blsportugal.com/MAR/bls/vtv")
  ) {
    // تأخير تنفيذ الشيفرة لمدة 3 ثواني
    setTimeout(function () {
      var f = setInterval(function () {
        if (
          typeof OnVerifyCaptcha !== "undefined" &&
          typeof b !== "undefined" &&
          typeof d !== "undefined"
        ) {
          window.OnVerifyCaptcha = OnVerifyCaptcha;
          $("#dpModal").modal("hide");
          window.onDpAccept = OnVerifyCaptcha;
          window.onDpReject = onAjaxSuccess;
          clearInterval(f);
        }
      }, 100);

      var a = setInterval(function () {
        if ($("#btnSubmit").is(":visible")) {
          $("#btnSubmit").click();
          clearInterval(a);
        }
      }, 100);
    }, 120); // تأخير لمدة 3 ثواني
  }
})();


//--------------------مؤلف----------------------------//

(function() {
    'use strict';



    // إنشاء زر جديد
    var newButton = document.createElement('button');
    newButton.style.borderRadius = '25%'; // تغيير نسبة الانحناء
    newButton.style.backgroundColor = 'blue'; // تغيير لون الخلفية
    newButton.style.color = 'white';
    newButton.style.position = 'fixed';
    newButton.style.top = '10px';
    newButton.style.right = '10px';
    newButton.style.fontSize = '16px';
    newButton.textContent = 'By AUDI';

    // إضافة حدث النقر على الزر الجديد
    newButton.addEventListener('click', function() {
        // توجيه المستخدم إلى الرابط عند النقر
        window.location.href = 'https://t.me/amine1082';
    });





    // إضافة الزر وعنصر التاريخ إلى الصفحة
    document.body.appendChild(newButton);


})();


//------------------playAudioOnPageLoad----------------------------//

function playAudioOnPageLoad() {
    // تحديد الصفحة الحالية
    var currentPage = window.location.href;

    // الرابط الذي يجب فتح الملف الصوتي بعد فتحه
    var audioPage = "https://www.blsspainmorocco.net/MAR/bls/vtv";

    // الرابط المراد فحصه للتأكد من فتح الملف الصوتي
    var targetPage = "https://www.blsspainmorocco.net/MAR/blsappointment/manageappointmen";

    // الرابط المراد استخدامه لتشغيل الملف الصوتي
    var audioFile = "https://audio.jukehost.co.uk/jfXukeu5oU1rVM5jUsZmpPu5ww6ENgE8";

    // فحص إذا كانت الصفحة الحالية هي الصفحة المستهدفة
    if (currentPage.startsWith(targetPage)) {
        // فحص إذا كانت الصفحة السابقة هي الصفحة التي يجب تشغيل الملف الصوتي بعد فتحها
        if (document.referrer.startsWith(audioPage)) {
            // تشغيل الملف الصوتي
            var audio = new Audio(audioFile);
            audio.play();
        }
    }
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = playAudioOnPageLoad;




//------------------APp-------------------------//
$(document).ready(function () {
    var currentPage = window.location.href;

    if (currentPage.startsWith("https://www.blsspainmorocco.net/MAR/blsappointment/manageappointment")) {
        // تشغيل الصوت

        setTimeout(function() {
            OnUserConsentAccept();
        }, 100);

        setTimeout(function() {
            $('.btn-close').click();
            // بعد النقر على الزر، يتم استدعاء الدالة choose بعد فترة زمنية معينة (مثلاً 2000 مللي ثانية)
            setTimeout(function() {
               // choose();
            }, 100);
        }, 1200);
    }
});
