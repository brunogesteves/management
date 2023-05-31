kill -9 $(lsof -t -i:3000)
kill -9 $(lsof -t -i:4000)
kill -9 $(lsof -t -i:3333)
kill -9 $(lsof -t -i:3001)
kill -9 $(lsof -t -i:3306)
cd backend
cd server
yarn dev &
cd ..
cd ..
cd frontend
yarn dev 

