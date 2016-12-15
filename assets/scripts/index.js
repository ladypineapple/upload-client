'use strict';

const uploads = require('./uploads/events');

$(()=>{
  $('#application-x-www-form-data').on('submit', uploads.handleUrlEncoded);
  $('#multipart-form-data').on('submit', uploads.handleMultiPartFormData);
});
