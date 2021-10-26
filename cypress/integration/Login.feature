Feature: Login

    As a user I should be able to login to the page

    Scenario Outline: Invalid login with wrong login and wrong password
        When user navigates to the page
        Then user enters wrong <login> and wrong <password>
        Then user should be able to receive error <message>

        Examples: Data set
            | login    | password | message                           |
            | "wrong1" | "bad1"    | "Invalid login, please try again" |
            | "wrong2" | "bad2"    | "Invalid login, please try again" |
            | "wrong3" | "bad3"    | "Invalid login, please try again" |
            | "wrong4" | "bad4"    | "Invalid login, please try again" |


            #formatter - shift+alt+F