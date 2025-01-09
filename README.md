POLL APPLICATION
This is a simple Poll Application built with React Native and Supabase. Users can log in anonymously, create polls, vote on existing polls, and delete their own polls.
1) Features
Anonymous Login: Users can log in without creating an account.
Create Polls: Users can create their own polls with options for others to vote on.
Vote on Polls: Users can view existing polls and vote on their preferred options.
Delete Polls: Users can delete their own polls.

2) Tech Stack
React Native: For building the mobile app.
Supabase: For backend services (authentication, database, and storage).
Expo: For development and building the React Native app.

3) Prerequisites
   Node.js
   Expo CLI:npm install -g expo-cli
   Git
   Supabase Account
   
5) Clone repository
   git clone https://github.com/aliza8833/Poll-App.git

6) Set Up Supabase
Create a Supabase account and project at https://app.supabase.io/.

Set up your database schema for polls, users, and votes in Supabase. Make sure to create tables for:

Polls: Store poll details (question, options).
Votes: Store user votes for each poll.
Users: Use Supabase's built-in authentication to store user info (if needed).
Get your Supabase URL and Supabase API key from the Supabase project dashboard.
![Poll app]()

