# Producer's Web
```mermaid
stateDiagram-v2

[*] --> _visit
_visit --> MainPage: hasCookie? no
_visit --> DefaultFarmPage:hasCookie? yes
MainPage --> SignInPage: hasAccount? yes
MainPage  --> SignUpPage: hasAccount? no
SignUpPage --> SignInPage
SignInPage --> FarmList: hasDefaultFarm? no
SignInPage  --> DefaultFarmPage: hasDefaultFarm? yes
FarmList --> DefaultFarmPage
```