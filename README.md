# README

## usersテーブル

| Column  | Type  | Options  |
|---|---|---|---|---|---|
| email  | string  | null: false  |  
| name  | string  | 

### Association
- belongs_to :group
- has_many :tweets

## messagesテーブル

| Column  | Type  | Options  |
|---|---|---|---|---|
| user_id | integer |null: false, foregin_key: true   |  
|  text  |  string |
| image | text  |    

### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groups

| Column  | Type  | Options  |
|---|---|---|---|---|
| tweet_id  | integer  |
| user_id  | integer  |

### Association
- has_many :tweets
- has_many :user




