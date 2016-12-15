'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const uploadsApi = require('./api');

const handleUrlEncoded = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  console.log("handleUrlEncoded ran, and data is ", data);

  uploadsApi.createUploadEncoded(data)
    .then(console.log)
    .catch(console.error);
};

const handleMultiPartFormData = function(event){
  event.preventDefault();

  let data = new FormData(event.target);
  console.log("handleMultipartFormData ran, and data is ", data);

  uploadsApi.createUploadMultiPart(data)
    .then(console.log)
    .catch(console.error);
};

module.exports = {
  handleUrlEncoded,
  handleMultiPartFormData,
};
