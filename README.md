# Chat-template on React + TS + Redux + FirebaseAuth + ChuckNorrisAPI

*Heroku can freeze and you have to wait and reload the page.

Features:
1. Sign in/Sign up with email and password
2. Auth with Facebook/Google/Github
3. If hover over the icon of an authenticated user, appear sign out and delete account buttons
4. After sending message, in 10-15 seconds you will receive a response message with a joke about Chuck Norris(API).
5. Pages state persists across reloads(chats - local storage, auth - indexedDB).
6. It is an error when you try to sign to a provider (such as GitHub) with an email that already exists for another Firebase user's provider (such as Google). Unfortunately, you can sign in only with one provider. If you want to change provider (to Google or Facebook or another) you should autoritze with prevent provider and delete your account in chat tab. This firebase error can be handled, but to be honest, it was difficult for me.

