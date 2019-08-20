# README

#--------------------------------------------------------#
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique:true|
|name|string|null: false|
|email|string|null: false, unique:true|
|password|string|null: false|

### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :comments
#--------------------------------------------------------#
## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique:true|
|name|string|null: false|

### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :comments
#--------------------------------------------------------#
## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique:true|
|comment|text||
|image|text||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
#--------------------------------------------------------#
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique:true|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
