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


## usersテーブル
| Column  | Type  | Options  |
|---|---|---|---|---|---|
| email  | string  | null: false  |  
| name  | string  | 
### Association
- belongs_to :group
- has_many :tweets


## tweetsテーブル
| Column  | Type  | Options  |
|---|---|---|---|---|
| user_id | integer |null: false, foregin_key: true   |  
|  text  |  string |
| image | text  |   |   |   |   |
| tweet_id  | string  | null: false, foregin_key: true | 
### Association
- belongs_to :user
- belongs_to :group


## groups
| Column  | Type  | Options  |
|---|---|---|---|---|
| tweet_id  | integer  |
| user_id  | integer  |
### Association
- has_many :tweets
- has_many :user

