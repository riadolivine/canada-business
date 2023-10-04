/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function trigger_login(event) {
    var x = event.which || event.keyCode;
    if (x === 13) {
        student_login();
    }
}

function insert_after_element(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function student_login() {
    var lang = document.getElementById('lang').value;
    console.log(lang);
    if (document.getElementById('phone').value == '') {
        if (document.contains(document.getElementById("phone_error"))) {
            document.getElementById("phone_error").remove();
        } else {
            var el = document.createElement("span");
            el.setAttribute("id", "phone_error");
            if (lang === 'bn') {
                el.innerHTML = "ফোন নম্বর অথবা ইউজার নেম আবশ্যক";
            } else {
                el.innerHTML = "Phone number Or Username required";
            }
            el.style.color = "red";
            insert_after_element(document.getElementById("phone"), el);
        }
    } else {
        if (document.contains(document.getElementById("phone_error"))) {
            document.getElementById("phone_error").remove();
        }
    }
    if (document.getElementById('password').value == '') {
        if (document.contains(document.getElementById("pass_error"))) {
            document.getElementById("pass_error").remove();
        } else {
            var el = document.createElement("span");
            el.setAttribute("id", "pass_error");
            if (lang === 'bn') {
                el.innerHTML = "পাসওয়ার্ড আবশ্যক";
            } else {
                el.innerHTML = "Password required";
            }
            el.style.color = "red";
            insert_after_element(document.getElementById("password"), el);
        }
    } else {
        if (document.contains(document.getElementById("phone_error"))) {
            document.getElementById("phone_error").remove();
        }
    }
    if (document.getElementById('phone').value != '' && document.getElementById('password').value != '') {
        document.getElementById('auth-login').submit();
    }

}

function get_district(id) {
    if (id !== '') {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'POST',
            url: '/load/district',
            dataType: 'json',
            data: {
                'division_id': id
            },
            success: function (response) {
                var obj = response;
                if (obj.output == "success") {

                    $('#district_option').html('');
                    if (obj.lang == 'bn') {
                        $('#district_option').html('<option value="">নির্বাচন করুন</option>')
                        $.each(obj.district_list, function (key, Event) {
                            $('#district_option').append($('<option>', {
                                value: Event.id,
                                text: Event.name_bn
                            }));
                        });
                    } else {
                        $('#district_option').html('<option value="">Select</option>')
                        $.each(obj.district_list, function (key, Event) {
                            $('#district_option').append($('<option>', {
                                value: Event.id,
                                text: Event.name_en
                            }));
                        });
                    }

                } else {
                    alert(obj.msg);
                }
            }
        });
    }
}


function get_thana(id) {
    if (id !== '') {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'POST',
            url: '/load/thana',
            dataType: 'json',
            data: {
                'district_id': id
            },
            success: function (response) {
                var obj = response;
                if (obj.output == "success") {

                    $('#thana_option').html('');
                    if (obj.lang == 'bn') {
                        $('#thana_option').html('<option value="">নির্বাচন করুন</option>')
                        $.each(obj.thana_list, function (key, Event) {
                            $('#thana_option').append($('<option>', {
                                value: Event.id,
                                text: Event.name_bn
                            }));
                        });
                    } else {
                        $('#thana_option').html('<option value="">Select</option>')
                        $.each(obj.thana_list, function (key, Event) {
                            $('#thana_option').append($('<option>', {
                                value: Event.id,
                                text: Event.name_en
                            }));
                        });
                    }

                } else {
                    alert(obj.msg);
                }
            }
        });
    }
}

function get_postoffice(id) {
    if (id !== '') {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'POST',
            url: '/load/postoffice',
            dataType: 'json',
            data: {
                'district_id': id
            },
            success: function (response) {
                var obj = response;
                if (obj.output == "success") {

                    $('#postoffice_option').html('');
                    if (obj.lang == 'bn') {
                        $('#postoffice_option').html('<option value="">নির্বাচন করুন</option>')
                        $.each(obj.postoffice_list, function (key, Event) {
                            $('#postoffice_option').append($('<option>', {
                                value: Event.id,
                                text: Event.name_bn + '-' + Event.post_code
                            }));
                        });
                    } else {
                        $('#postoffice_option').html('<option value="">Select</option>')
                        $.each(obj.postoffice_list, function (key, Event) {
                            $('#postoffice_option').append($('<option>', {
                                value: Event.id,
                                text: Event.name_en + '-' + Event.post_code
                            }));
                        });
                    }

                } else {
                    alert(obj.msg);
                }
            }
        });
    }
}

function get_occupation(id) {
    if (id !== '') {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'POST',
            url: '/load/occupation',
            dataType: 'json',
            data: {
                'sector_id': id
            },
            success: function (response) {
                var obj = response;
                if (obj.output == "success") {

                    $('#occupation_option').html('');
                    if (obj.lang == 'bn') {
                        $('#occupation_option').html('<option value="">নির্বাচন করুন</option>');
                        $.each(obj.occupation_list, function (key, Event) {
                            $('#occupation_option').append($('<option>', {
                                value: Event.id,
                                text: Event.name_bn
                            }));
                        });
                    } else {
                        $('#occupation_option').html('<option value="">Select</option>');
                        $.each(obj.occupation_list, function (key, Event) {
                            $('#occupation_option').append($('<option>', {
                                value: Event.id,
                                text: Event.name_en
                            }));
                        });
                    }
                } else {
                    alert(obj.msg);
                }
            }
        });
    }
}

