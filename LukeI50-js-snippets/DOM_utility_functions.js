/**
 * LukeI50's collection of utility functions for working with the DOM.
 */
class UtilityFunctions{
    
    /**
     * Creates a cookie with the specified name and value.
     * @param {string} cookie_name - The name of the cookie.
     * @param {string} cookie_value - The value of the cookie.
     */
    cookieCreate(cookie_name, cookie_value) {
        document.cookie = `${cookie_name}=` + `${cookie_value}` + "; path=/; Secure; SameSite=None;"
    };
    

    /**
     * Creates cookies from an object where keys are cookie names and values are cookie values.
     * @param {Object} name_and_value - An object containing cookie names and values.
     */
    cookieCreateFromObj(name_and_value) {
        let cookieString = "";

        Object.entries(name_and_value).forEach(([key, value]) => {
            cookieString += `${key}=${value}; `;
        });
        
        document.cookie = `${cookieString}` + "path=/; Secure; SameSite=None;"
        
    };

    cookieGetValue(cookie_name) {
        value = document.cookie.split("; ")
        .find((row) => row.startsWith(`${cookie_name}=`))
        ?.split("=")[1];
        return value;
    }


    /**
     * Creates a new HTML element with the specified properties.
     * @param {string} element_name - The type of element to create.
     * @param {Array|string} [class_list=[]] - A list of classes to add to the element.
     * @param {string} [text=""] - The text content of the element.
     * @param {string} [action=""] - The action attribute for the element (if applicable).
     * @param {string} [method=""] - The method attribute for the element (if applicable).
     * @param {string} [href=""] - The href attribute for the element (if applicable).
     * @param {Object} [attributes_obj={}] - Additional attributes to set on the element.
     * @returns {HTMLElement} The created HTML element.
     */
    elementCreate(element_name, class_list=[], text="", action="", method="", href="", attributes_obj={}) {
        const newElement = document.createElement(element_name);

        // Unpack class_list or use default empty one
        if (Array.isArray(class_list)) {
            newElement.classList.add(...class_list);
        } else {
            newElement.classList.add(class_list);
        }

        newElement.innerText = text;

        if (attributes_obj && Object.keys(attributes_obj).length > 0) {
            Object.entries(attributes_obj).forEach(([key, value]) => {
                newElement.setAttribute(key, value);
            });
        }

        return newElement
    };


    /**
     * Hides the specified HTML element by adding the 'd-none' class.
     * @param {HTMLElement} targetElement - The element to hide.
     */
    hideElement(targetElement) {
        targetElement.classList.add('d-none');
    };

    /**
     * Shows the specified HTML element by removing the 'd-none' class.
     * @param {HTMLElement} targetElement - The element to show.
     */
    showElement(targetElement) {
        targetElement.classList.remove('d-none');
    };

};
