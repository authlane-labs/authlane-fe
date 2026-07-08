# AuthLane FE

신규 React 인증 화면과 레거시 로그인 폼이 같은 인증 API를 사용하도록 구성한 프론트엔드입니다.

## 기능

- 로그인/토큰 갱신 API client
- 세션 상태 dashboard
- 휴대폰 인증 상태 표시
- refresh token retry 상태 표시
- jQuery/Ajax legacy login adapter
- TanStack Query 기반 서버 상태 관리

## 구조

```text
src/features/dashboard/api.ts
src/features/dashboard/hooks.ts
src/features/dashboard/types.ts
src/features/dashboard/dashboard.tsx
src/features/chart/d3-trend.ts
src/features/legacy/jquery-adapter.ts
src/shared/api/client.ts
```

## 실행

```bash
npm install
npm run dev
npm run build
npm run test:e2e
```

## 환경 변수

```bash
VITE_API_URL=http://localhost:8000/api
```
