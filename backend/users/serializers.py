from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()  # Gets our CustomUser model


class UserSerializer(serializers.ModelSerializer):
    """Serializer for user profile data"""
    
    class Meta:
        model = User
        fields = ['id', 'email', 'full_name', 'phone', 'created_at']
        read_only_fields = ['id', 'created_at']


class RegisterSerializer(serializers.ModelSerializer):
    """Serializer for user registration"""
    
    password = serializers.CharField(write_only=True, min_length=8)
    password2 = serializers.CharField(write_only=True, min_length=8)
    
    class Meta:
        model = User
        fields = ['email', 'full_name', 'phone', 'password', 'password2']
    
    def validate(self, data):
        """Check that passwords match"""
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords don't match!")
        return data
    
    def create(self, validated_data):
        """Create new user with hashed password"""
        validated_data.pop('password2')  # Remove password2, don't save it
        
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            full_name=validated_data['full_name'],
            phone=validated_data.get('phone', '')
        )
        return user