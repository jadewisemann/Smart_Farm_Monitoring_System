# Producer's Web
```mermaid
stateDiagram-v2
state if_state <<choice>>
state if_state_1 <<choice>>
state if_state_2 <<choice>>

[*] --> _visit
_visit --> if_state:hasCookie
if_state --> MainPage: no
if_state --> if_state_2:yes

MainPage --> if_state_1: hasAccount
if_state_1 -->SignInPage: yes
if_state_1 --> SignUpPage: no

SignUpPage --> SignInPage

SignInPage --> if_state_2: hasDefaultFarm
if_state_2 --> FarmList: no
if_state_2 --> DefaultFarmPage: yes
FarmList --> DefaultFarmPage

```