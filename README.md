# README

#--------------------------------------------------------#
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique:true|
|name|text|null: false|
|email|string|null: false, unique:true|
|password|string|null: false|

### Association
- has_many :group_user

#--------------------------------------------------------#
## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique:true|
|groupname|text|null: false|

### Association
- has_many :group_user

#--------------------------------------------------------#
## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique:true|
|user_group_id|integer|null: false, foreign_key: true|
|image|text||
### Association
- belongs_to :group_user

#--------------------------------------------------------#
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique:true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
- has_many :comment
