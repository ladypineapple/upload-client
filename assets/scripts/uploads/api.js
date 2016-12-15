'use strict';

const createUploadEncoded = function(data){
  return $.ajax({
    url: 'http://localhost:4741',
    method: 'POST',
    data,
  });
};

const createUploadMultiPart = function(data){
  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    data,
    contentType: false,
    processData: false,
  });
};

module.exports = {
  createUploadEncoded,
  createUploadMultiPart,
};
