// src/components/Contacts.js
import React from 'react';

const Contacts = () => (
  <section id="contacts" className="mb-32">
  <h2 className="text-2xl font-medium mb-8">
    <span className="text-purple-400">#</span>contacts
  </h2>

  <div className="grid grid-cols-2 gap-12">
    <div>
      <p className="text-gray-400">
        I'm interested in freelance opportunities. However,
        if you have other request or question, don't
        hesitate to contact me
      </p>
    </div>
    <div className="border border-gray-700 p-4">
      <h3 className="font-medium mb-4">Message me here</h3>
      <div className="space-y-2 text-gray-400">
        <p>Discord: Tristan#9519</p>
        <p>Email: tristan@tristan.me</p>
      </div>
    </div>
  </div>
</section>
);

export default Contacts;
