mymap = L.map('mapid').setView([53.5267, -6.5488], 13);

                            L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=zbyC3NxJZISl7AmrhZwq', {
                                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                            }).addTo(mymap);

                            var marker = L.marker([53.5267613,-6.5488573]).addTo(mymap);