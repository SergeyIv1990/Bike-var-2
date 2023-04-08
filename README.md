TASK (Задание)
FEATURES:
Create app for bike rental. App user should be able to:
• View list of available bikes;
• View list of rented bikes;
• Add new bike to available list;
• Delete bike from available list;
• Rent a bike (move bike from available to rented list);
• Cancel rent (move bike from rented list to available list);
• Calculate rent time for each bike;
Would be a plus:
• Decrease price due to rent time. If rent time of the bike more than 5 hours price 
decreases in half;

DESCRIPTION:
The page should contain a form for adding bikes. The form should consist of the following 
fields: Bike name — a text field, Bike type (road, mountain, etc.)—a dropdown list, Rent price—
a numeric field,
When you click on the button Add, a bike should appear in the Available list.
Under the form, two lists of bikes should be displayed, Available and Rented.
A user can rent a bike from the Available list.
Next to each bike, there should be two buttons, Rent and Delete.
When a user clicks on the button Rent, the bike should disappear from the Available list and 
appear in the Rented list.
To cancel the rent, a user should click on the button Cancel rent next to the corresponding bike 
in the Rented list, and the bike should return to the Available list.
The total number of items in each list should be displayed above the lists