const deshboardData =  {
    "dashboardTitle": "Hotel Admin Dashboard",
    "summary": {
      "totalRooms": 120,
      "occupiedRooms": 85,
      "availableRooms": 35,
      "todayCheckIns": 18,
      "todayCheckOuts": 12,
      "totalStaff": 45,
      "currentGuests": 102,
      "monthlyRevenue": 27450
    },
    "recentBookings": [
      {
        "bookingId": "BK20250416001",
        "guestName": "John Doe",
        "roomNumber": 203,
        "checkInDate": "2025-04-16",
        "checkOutDate": "2025-04-20",
        "status": "Checked In",
        "amount": 480
      },
      {
        "bookingId": "BK20250416002",
        "guestName": "Emma Stone",
        "roomNumber": 110,
        "checkInDate": "2025-04-15",
        "checkOutDate": "2025-04-17",
        "status": "Reserved",
        "amount": 320
      },
      {
        "bookingId": "BK20250415089",
        "guestName": "Liam Smith",
        "roomNumber": 305,
        "checkInDate": "2025-04-14",
        "checkOutDate": "2025-04-16",
        "status": "Checked Out",
        "amount": 620
      }
    ],
    "topStaff": [
      {
        "name": "Rachel Green",
        "role": "Front Desk",
        "shiftsThisWeek": 5,
        "rating": 4.9,
        'experience':5,
        'email':'employee1@gmail.com',
        'color':'bg-green-500'
      },
      {
        "name": "Monica Geller",
        "role": "Housekeeping",
        "shiftsThisWeek": 6,
        "rating": 4.8,
        'experience':2,
        'email':'employee2@gmail.com',
        'color':'bg-red-500'


      },
      {
        "name": "Chandler Bing",
        "role": "Manager",
        "shiftsThisWeek": 4,
        "rating": 5.0,
        'experience':2,
        'email':'employee3@gmail.com',
        'color':'bg-blue-500'


      }
    ],
    "notifications": [
      {
        "message": "Room 102 requires cleaning",
        "time": "2025-04-16T10:30:00Z",
        "priority": "high",
        "color":"bg-red-100 text-red-700"
        
      },
      {
        "message": "Booking #BK20250416002 is awaiting confirmation",
        "time": "2025-04-16T09:15:00Z",
        "priority": "medium",
        "color":"bg-yellow-100 text-yellow-700"

      },
      {
        "message": "Staff meeting scheduled at 5 PM",
        "time": "2025-04-16T08:00:00Z",
        "priority": "low",
        "color":"bg-green-100 text-green-700"

      }
      
    ]
    
  }
  export default deshboardData