from flask import Blueprint, request, jsonify
from app import db, bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models import User, HealthData, Appointment

api = Blueprint('api', __name__)

# Register a new user
@api.route('/register', methods=['POST'])
def register_user():
    data = request.json
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(email=data['email'], password=hashed_password, role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

# User login
@api.route('/login', methods=['POST'])
def login_user():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        token = create_access_token(identity=user.id)
        return jsonify({'token': token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

# Get health data (protected route)
@api.route('/dashboard', methods=['GET'])
@jwt_required()
def get_health_data():
    user_id = get_jwt_identity()
    health_data = HealthData.query.filter_by(user_id=user_id).all()
    output = [{'sleep': data.sleep, 'exercise': data.exercise, 'mood': data.mood, 'date': data.date} for data in health_data]
    return jsonify(output)

# Submit health data (protected route)
@api.route('/dashboard/update', methods=['POST'])
@jwt_required()
def update_health_data():
    user_id = get_jwt_identity()
    data = request.json
    new_data = HealthData(sleep=data['sleep'], exercise=data['exercise'], mood=data['mood'], user_id=user_id)
    db.session.add(new_data)
    db.session.commit()
    return jsonify({'message': 'Health data updated successfully'}), 201

# Book an appointment (protected route)
@api.route('/appointments/book', methods=['POST'])
@jwt_required()
def book_appointment():
    user_id = get_jwt_identity()
    data = request.json
    new_appointment = Appointment(appointment_date=data['appointment_date'], doctor=data['doctor'], user_id=user_id)
    db.session.add(new_appointment)
    db.session.commit()
    return jsonify({'message': 'Appointment booked successfully'}), 201
