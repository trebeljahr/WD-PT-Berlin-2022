import { useRef, useState } from "react";
import { BASE_URL } from "../consts";

export function UploadFile() {
  const [userAvatar, setUserAvatar] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    const fileField = inputRef.current;

    formData.append("image", fileField.files[0]);

    console.log(fileField);
    console.log(formData);

    const res = await fetch(BASE_URL + "/file-upload", {
      method: "PUT",
      body: formData,
    });

    const data = await res.json();
    const avatarUploadUrl = BASE_URL + "/" + data.url;
    console.log(data);
    console.log(avatarUploadUrl);

    setUserAvatar(BASE_URL + "/" + data.url);
  };

  const inputRef = useRef();

  return (
    <>
      {userAvatar ? (
        <img src={userAvatar} alt="user's avatar" />
      ) : (
        <>
          <input ref={inputRef} type="file" />
          <button onClick={handleUpload}>Send to Server!</button>
        </>
      )}
    </>
  );
}
