'use strict';

const getFormFields = require('../../lib/get-form-fields');

const handleUrlEncoded = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  console.log("handleUrlEncoded ran, and data is ", data);

  return $.ajax({
    url: 'http://localhost:4741',
    method: 'POST',
    data,
  });
};

const handleMultiPartFormData = function(event){
  event.preventDefault();

  let data = new FormData(event.target);
  console.log("handleMultipartFormData ran, and data is ", data);

  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    data,
    contentType: false,
    processData: false,
  });
};



$(()=>{
  $('#application-x-www-form-data').on('submit', handleUrlEncoded);
  $('#multipart-form-data').on('submit', handleMultiPartFormData);
});
