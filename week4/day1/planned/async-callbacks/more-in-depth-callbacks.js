// how would we handle this if we wanted something more complex?
// 1. get a/b split testing group
// 2. get content for split testing group
// 3. get user name
// 4. assemble user name + content

function getGroup(cb) {
  console.log("Getting Group...");
  let group = null;
  setTimeout(() => {
    group = Math.random() > 0.5 ? "A" : "B";
    console.log("Received Group: " + group);
    cb(group);
  }, Math.random() * 5000);
}

function getContent(group, user) {
  console.log("Getting Content for Group " + group + " " + user + "...");
  let content = null;
  setTimeout(() => {
    content =
      group === "A" ? "Welcome Dear User: " + user : "Hello there: " + user;
    console.log("Received Content: " + content);
  }, Math.random() * 5000);
}

function getUser(cb) {
  console.log("Getting User...");
  let user = null;
  setTimeout(() => {
    user = "Rico Trebeljahr";
    console.log("Received User: " + user);
    cb(user);
  }, Math.random() * 5000);
}

// how to connect them though?

function assemble() {
  let user = null;
  let group = null;

  const canComplete = () => {
    console.log("Received Info:");
    console.log("User: ", user ? "yes" : "no");
    console.log("Group: ", group ? "yes" : "no");
    if (user && group) {
      getContent(group, user);
    }
  };

  const cb1 = (result) => {
    user = result;
    canComplete();
  };
  const cb2 = (result) => {
    group = result;
    canComplete();
  };

  getGroup(cb2);
  getUser(cb1);
}

assemble();
