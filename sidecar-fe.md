



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

```rb

>> album = Album.where(:name => 'The Beatles').first
  Album Load (0.1ms)  SELECT "albums".* FROM "albums" WHERE "albums"."name" = 'The Beatles' LIMIT 1
=> #<Album id: 10, name: "The Beatles", release_year: 1968, created_at: "2012-11-14 13:26:01", updated_at: "2012-11-14 13:26:01">
>> album.name
=> "The Beatles"
>> album.name = 'A Test'
=> "A Test"
>> album.save
   (0.1ms)  begin transaction
   (0.4ms)  UPDATE "albums" SET "name" = 'A Test', "updated_at" = '2012-11-14 18:51:46.694219' WHERE "albums"."id" = 10
   (3.9ms)  commit transaction
=> true
>> Album.last
  Album Load (0.3ms)  SELECT "albums".* FROM "albums" ORDER BY "albums"."id" DESC LIMIT 1
=> #<Album id: 13, name: "I Got a Woman", release_year: 1955, created_at: "2012-11-14 13:39:49", updated_at: "2012-11-14 13:39:49">
>> exit
```

```rb
#.color_name ⇒ String
#Produces the name of a color.

color: "#{Faker::Color.color_name}"}

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

