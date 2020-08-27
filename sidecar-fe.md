



add css styling to remove dots from ul.
```css
list-style-type: none;
```


add css styling to add check boxes to ul.
```js
const tasksContainer = document.getElementById("tasks-container");
    
const tasksString = this.tasks.map(task => `
    <li><input type="checkbox">
    ${task.name} - ${task.body} Project ID = ${task.project_id}
    </li>`).join('');

```

change :tasks.completed attribute default to false
```rb
class AddCompletedDefaultToTasks < ActiveRecord::Migration[6.0]
  def change
        change_column_default :tasks, :completed, false
  end
end
# t.integer :col_name, :default => 0
```

DB [clear, re-migrate then re-seed]

```rb
rails db:migrate:reset
rails db:seed

```
wrap index.html in <main> tag

```html
<body>
  <main>
  </main>
</body>

```
add page class to each page and create an active class
```html
<div class = page>
<div class = page active>

```
add id's for the page name
```html
<div class = page active id="tasks">

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

