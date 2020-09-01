class TasksAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/tasks';
    console.log('TasksAdapter.js is working');
  }

  getTasks() {
    return fetch(this.baseUrl).then(res => res.json())
    //     return fetch(this.baseUrl).then(res => console.log(res.json()))
  }

  createTask(taskParams) {
     // debugger
    return fetch(this.baseUrl, 
      {
        method: 'POST',
        headers:
        {
          'content-type': 'application/json',
        },
        body: JSON.stringify(taskParams), //, user_id: 1 }),
      })
      .then(res => res.json())
      // console.log({taskParams})
  }

  // updateTask(task_id, taskParams) {
  //   return fetch(this.baseUrl + "/" + task_id,
  //     {
  //       method: 'PATCH',
  //       headers:
  //       {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify(taskParams),
  //     })
  //     .then(res => res.json());
  // }
}
