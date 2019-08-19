# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

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