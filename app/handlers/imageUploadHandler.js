export default async function imageUploadHandler(image) {
  const imageFile = getImageUri(image);
  const bodyData = new FormData();
  bodyData.append("file", imageFile);
  bodyData.append("upload_preset", "time-workout");
  const imageUrl = await imageUpload(bodyData);
  return imageUrl;
}

const getImageUri = (image) => {
  const imageFile = {
    uri: image,
    type: `image/${image.split(".").pop()}`,
    name: `profile.${image.split(".").pop()}`,
  };
  return imageFile;
};

const imageUpload = async (data) => {
  const url = fetch("https://api.cloudinary.com/v1_1/ditqkou9h/image/upload", {
    method: "post",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      return data.secure_url;
    });
  return url;
};
