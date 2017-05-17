$(function(){
   
      $('#exm1').validetta({
                   onValid: function(event){
                        event.preventDefault();

                            var name = $('#name').val();
                            var email = $('#email').val();
                            var phone = $('#phone').val();
                            var msg = $('#msg').val();
                       
                            $('#name').val("");
                            $('#email').val("");
                            $('#phone').val("");
                            $('#msg').val("");   
                       
                            var myobject = {
                                "name": name,
                                "phone": phone,
                                "mail": email,
                                "message": msg
                            }
                                
                            $.ajax({
                                type: "POST",
                                url: "https://yvillage.herokuapp.com/contactme",
                //                url: "http://localhost:3000/contactme",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(myobject),
                                success: function (data) {
                                    
//                                    alert(data.name);
                                         swal(
                                          'תודה, ניצור איתך קשר בהקדם',
                                          '',
                                          'success'
                                        )
                                }
                            });
                        },
                    validators: {
                        regExp: {
                            regname: {
                                pattern: /^[\sA-Za-zא-ת]*$/,
                                errorMessage: '!הכנס/י שם תקין'
                            }
                        },
                    },
                        realTime : true
                    });
    
});

 