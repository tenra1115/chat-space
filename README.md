# README

## usersテーブル

| Column  | Type  | Options  |
|---|---|---|---|---|---|
| email  | string  | null: false  |  
| name  | string  | null: false, index: true|

### Association
- has_many :groups, through: :members
- has_many :members
- has_many :messages

## messagesテーブル

| Column  | Type  | Options  |
|---|---|---|---|---|
| user_id | integer |null: false, foregin_key: true   |  
| group_id | integer |null: false, foregin_key: true  |
|  text  |  string |
| image | string  |    

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




