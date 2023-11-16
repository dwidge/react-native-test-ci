source ./scripts/secrets.sh
keytool -genkeypair -v -storetype PKCS12 -keystore "$SECRETS_PATH/$UPLOAD_STORE_FILE" -alias $UPLOAD_KEY_ALIAS -storepass $UPLOAD_KEY_PASSWORD -keyalg RSA -keysize 2048 -validity 10000
