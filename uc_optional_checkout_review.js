// $Id$

/**
 * @file
 * Adds effects and behaviors to elements on the checkout page.
 */

/**
 * Add a throbber to the submit order button on the order form.
 */
Drupal.behaviors.ucSubmitOrderThrobberNoReview = function(context) {
  $('form#uc-cart-checkout-form input#edit-continue:not(.ucSubmitOrderThrobberNoReview-processed)', context).addClass('ucSubmitOrderThrobberNoReview-processed').click(function() {
    $(this).clone().insertAfter(this).attr('disabled', true).after('<span class="ubercart-throbber">&nbsp;&nbsp;&nbsp;&nbsp;</span>').end().hide();
    $('#uc-cart-checkout-form #edit-cancel').attr('disabled', true);
  });
}
