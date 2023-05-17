'use client'
import { useState } from "react"
import TabButton from "./tabBtn"
import Daily from "./daily"
import Weekly from "./weekly"
import Monthly from "./monthly"

export default function RankSection(){
    const [activeTab, setActiveTab] = useState('daily')
    const selectTab = (nextTab:any)=> {
        setActiveTab(nextTab)
    }
    return(
        <div
        className="bg-white p-5 rounded-lg"
        style={{ boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.25)" }}
      >
        <h1 className="text-center font-bold">Rank</h1>
        <div className="mt-4">
          {/* tabs navigation */}
          <ul className="flex justify-between h-10 rounded-lg border-2 border-gray-500 p-1">
            <li>
              <TabButton active={activeTab === 'daily'} onTabClick={()=> selectTab('daily')}>Daily</TabButton>
            </li>
            <li>
              <TabButton active={activeTab === 'weekly'} onTabClick={()=> selectTab('weekly')}>Weekly</TabButton>
            </li>
            <li>
              <TabButton active={activeTab === 'monthly'} onTabClick={()=> selectTab('monthly')}>Monthly</TabButton>
            </li>
          </ul>
          {activeTab === "daily" && <Daily/>}
          {activeTab === "weekly" && <Weekly/>}
          {activeTab === "monthly" && <Monthly/>}
        </div>
      </div>
    )
}