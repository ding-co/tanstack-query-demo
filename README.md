# Tanstack Query Demo App

### TO-DO List Demo App with Tanstack Query

- Node v20.14.0 / Pnpm 9
- Next.js 14 App Router/React 18
- TypeScript 5
- Tailwind 3
- Shadcn/ui
- Prisma/SQLite
- Tanstack Query 5, devtools
- Custom Prettier, ESLint Airbnb, Git Husky

### 기타 설정

- package.json의 engine / .npmrc
- .nvmrc
- fnm

### 참고 사항

- Bun
  - Next.js App Router에서는 아직 Bun이 구현하지 않은 Node.js API를 사용해서 Bun으로 프로젝트 초기화, 패키지 설치는 가능하지만 개발 환경은 일반 Node.js 환경으로 시작됨
  - Vite와 Bun은 작동은 하지만 최적화 작업이 아직 완료되지 않았고 Bun의 번들러, 모듈 리졸버, 트랜스파일러를 사용하도록 조정되지도 않음
- Tanstack Query
  - devtools를 devDep가 아닌 dep로 설치
  - NODE_ENV가 development 일 때만 번들에 포함됨
  - lazy loading 기법을 통해 production 에서 bundle 제외하고 브라우저 콘솔에서 window.toggleDevtools를 통해 호출 가능
  - 프로덕션 환경에서도 사용 가능

### Prisma 관련 명령어

```bash
# 웹에서 DB 보기
npx prisma studio

# Prisma Client 생성/업데이트
npx prisma generate

# 데이터베이스 생성
npx prisma migrate dev --name init

# 데이터베이스 초기화
npx prisma migrate reset
```
