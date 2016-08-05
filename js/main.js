// Wrappers around functions included in the global scope thanks to dct.js

const createEncodingDctFunction = this.createEncodingDctFunction;
const getImageWithModifiedCoeficients = (imgData, quality, dctModificationFunction) => {
  return new Promise((resolve, reject) => {
    this.encodeData(imgData, quality, dctModificationFunction, resolve);
  });
}
const getHiddenMessageFromImage = (stegImageUrl, decodingFunction) => {
  return new Promise((resolve, reject) => {
    this.decodeImage(stegImageUrl, decodingFunction, resolve);
  });
}

// Library functions

const getImageDataFromURL = (URL) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      const cvs = document.createElement("canvas");
      cvs.width = img.width;
      cvs.height = img.height;
      const ctx = cvs.getContext("2d");
      ctx.drawImage(img, 0, 0);
      resolve(ctx.getImageData(0, 0, cvs.width, cvs.height));
    };
    img.src = URL;
  });
};

const downloadWithName = (uri, name) => {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
};

// Configuration

// This is a modified linear block code that I have pregenerated. See the thesis for more information.
const mlbc = JSON.parse('{"k":3,"n":27,"l":11,"r":13,"G1":[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1]],"Ht":[[0,1,1,1,1,1,1,1,0,0,0,0,1],[1,1,0,1,1,0,0,0,1,0,0,0,0],[1,0,0,1,0,1,1,1,1,1,0,0,1],[1,0,1,0,1,1,1,0,1,0,0,0,0],[0,0,1,0,0,0,0,0,0,1,0,0,1],[1,1,0,0,1,0,1,0,1,1,1,1,1],[0,1,1,0,0,0,1,0,1,1,0,0,1],[0,1,1,0,0,0,0,0,0,1,0,0,1],[1,0,1,0,0,1,0,0,1,0,0,0,0],[0,0,1,0,0,0,1,0,1,1,0,0,0],[0,1,0,1,1,1,0,1,1,0,1,1,0],[1,1,0,1,1,0,0,0,1,0,0,1,0],[1,0,1,0,0,1,0,0,0,0,0,1,0],[1,0,0,1,0,0,1,0,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,1]],"Jt":[[1,0,0],[0,1,0],[0,0,1],[1,1,1],[1,0,0],[0,1,0],[0,0,0],[0,1,1],[1,1,0],[0,0,0],[0,1,0],[0,0,0],[1,1,0],[1,0,1],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],"G0":[[1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0],[0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1],[0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0],[0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0],[1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1],[1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1]]}');
const jpegQuality = 75;
const coverURL = 'image.jpg';

// ....

const getImageWithMessageHiddenViaMlbc = (coverImageUrl, mlbc, message, password) => {
  const encodingFunction = createEncodingDctFunction(message, password, mlbc);
  return getImageDataFromURL(coverImageUrl).then((imageData) => {
    return getImageWithModifiedCoeficients(imageData, jpegQuality, encodingFunction);
  });
}

const getHiddenMessageFromImageViaMlbc = (stegImageUrl, mlbc, password) => {
  const decodingFunction = createDecodingDctFunction(password, mlbc);
  return getHiddenMessageFromImage(stegImageUrl, decodingFunction);
}

const encodeMessageInImageWithPasswordAndDownload = (coverURL, message, password) => {
  getImageWithMessageHiddenViaMlbc(coverURL, mlbc, message, password).then((newImageUrl) => {
    downloadWithName(newImageUrl, 'secret.jpg');
  });
}

const handleEncodeClicked = () => {
  const message = document.getElementById("message").value;
  const password = document.getElementById("encode-password").value;
  if (message.length > 0 && password.length > 0) {
    encodeMessageInImageWithPasswordAndDownload(coverURL, message, password);
    // disableUI();
  } else {
    alert("Please ensure you have set the message and the password.");
  }
}

// var coefficientCount = (size.width * size.height / 64) - Math.floor(1+5*3*8*mlbcForEncodingAndDecoding.n/mlbcForEncodingAndDecoding.k);
// var maxLength = Math.floor(coefficientCount/8*mlbcForEncodingAndDecoding.k/mlbcForEncodingAndDecoding.n);

const handleDecodeClicked = (input) => {
  const password = document.getElementById("decode-password").value;
  const imageFile = document.getElementById("input-file").files[0];
  const imageUrl = URL.createObjectURL(imageFile);
  getHiddenMessageFromImageViaMlbc(imageUrl, mlbc, password).then((message) => {
    const decodedMessageElem = document.getElementById("decoded-message");
    decodedMessageElem.innerHTML = message;
    decodedMessageElem.style.display = "inline";
  });
}


const disableUI = () => {
  document.getElementById("encode-button").disabled = true;
  document.getElementById("wait").style.display = "inline";
}

document.getElementById("encode-button").addEventListener("click", handleEncodeClicked);
document.getElementById("decode-button").addEventListener("click", handleDecodeClicked);
