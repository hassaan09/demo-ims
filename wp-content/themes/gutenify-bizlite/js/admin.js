"use strict";

var _wp = wp,
    apiFetch = _wp.apiFetch;
jQuery(function ($) {
  var gutenify_bizliteRedirectToKitPage = function gutenify_bizliteRedirectToKitPage(res) {
    // if( res?.status && 'active' === res.status ) {
    window.location = "".concat(window.gutenify_bizlite.gutenify_kit_gallery); // }
  }; // Activate Gutenify.


  $(document).on('click', '.gutenify-bizlite-activate-gutenify', function () {
    $(this).html('<span class="dashicons dashicons-update"></span> Loading...').addClass('gutenify-bizlite-importing-gutenify');
    apiFetch({
      path: '/wp/v2/plugins/gutenify/gutenify',
      method: 'POST',
      data: {
        "status": "active"
      }
    }).then(function (res) {
      gutenify_bizliteRedirectToKitPage(res);
    })["catch"](function () {
      gutenify_bizliteRedirectToKitPage({});
    });
  });
  $(document).on('click', '.gutenify-bizlite-install-gutenify', function () {
    $(this).html('<span class="dashicons dashicons-update"></span> Loading...').addClass('gutenify-bizlite-importing-gutenify');
    apiFetch({
      path: '/wp/v2/plugins',
      method: 'POST',
      data: {
        "slug": "gutenify",
        "status": "active"
      }
    }).then(function (res) {
      gutenify_bizliteRedirectToKitPage(res);
    })["catch"](function () {
      gutenify_bizliteRedirectToKitPage({});
    });
  });
  $(document).on('click', '.gutenify-bizlite-admin-notice .notice-dismiss', function () {
    console.log(ajaxurl + "?action=gutenify_bizlite_hide_theme_info_noticebar");
    apiFetch({
      url: ajaxurl + "?action=gutenify_bizlite_hide_theme_info_noticebar&gutenify_bizlite-nonce-name=".concat(window.gutenify_bizlite.gutenify_bizlite_nonce),
      method: 'POST'
    }).then(function (res) {
      console.log(res);
    })["catch"](function (res) {
      console.log(res);
    });
  });
});