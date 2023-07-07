## Get Started 
1. create ".env" file in the root of project
2. in ".env" file create the PORT(int) and BASE_URL(string) variables, BASE_URL for sqlite see in Prisma Docs
## Comands
- Run a migration if clone that repository or there are any changes in "schema.prisma" file
```
npx prisma migrate dev      
```
- Open Prisma Interface to manage database
``` 
npx prisma studio
```
- Run server 
``` 
npm run dev
```
