// recap of callback functions

function execute(file) {
  if (file === null) {
    console.log("File is not done downloading or doesn't exist!");
  } else {
    file.execute();
  }
}

function download() {
  const file = { execute: () => console.log("File was executed") };
  return file;
}

function downloadAndExecute() {
  const file = download();
  execute(file);
}

downloadAndExecute();

// however if we pretend that the download takes some time - what happens?
function downloadWithDelay() {
  console.log(`Download 1 started...`);
  let file = null;
  setTimeout(() => {
    file = { execute: () => console.log("File was executed") };
    console.log(`Download 1 finished!`);
  }, 1);
  return file;
}

const file = downloadWithDelay();
execute(file);

function fixedDownloadWithDelay(executeAfterDownloadFinished) {
  console.log(`Download 2 started...`);
  let file = null;
  setTimeout(() => {
    file = { execute: () => console.log("File was executed") };
    console.log(`Download 2 finished!`);
    executeAfterDownloadFinished(file);
  }, 1);
}

fixedDownloadWithDelay(execute);
