$(() => {
  var validObj = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      first_name: {
        validators: {
          stringLength: {
            min: 2,
          },
          notEmpty: {
            message: 'Please, enter your name.'
          }
        }
      },
      phone: {
        validators: {
          regexp: {
            regexp: /^(?:|\+)\d[\d]{11}$/i,
            message: 'Please, enter correct phone number.'
          },
          notEmpty: {
            message: 'Please, enter your phone number.'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Please, enter your email.'
          },
          emailAddress: {
            message: 'Please check if the email you entered is correct.'
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: 'Please, enter your password.'
          },
          stringLength: {
            min: 8,
            max:16,
          },
          password: {
            message: 'Please use a password not shorter than 8 characters and not more than 16.'
          }
        }
      }    
    }
  }
  $('#contact_form').bootstrapValidator(validObj).on('success.form.bv', function(e) {
    e.preventDefault(); 
    var $form = $(this);
    $.ajax({
      url: $form.attr('action'),
      type: 'POST',
      data: $form.serializeArray(),
      dataType: 'json',
      success: (res) => {
        // после успешного выполнения запроса
        $('#success_message').slideDown('slow');
        $form[0].reset();
        console.log(res);
      }
    });
  });
});